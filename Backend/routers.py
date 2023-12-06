from fastapi import FastAPI, APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from typing import Annotated
from database import SessionLocal
import models, schemas
from database import engine

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependancy = Annotated[Session, Depends(get_db)]
models.Base.metadata.create_all(engine)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_item(request: schemas.Credentials, db: db_dependancy):
    item = models.Credential(**request.dict())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item


@router.get(
    "/", status_code=status.HTTP_200_OK, response_model=list[schemas.Credentials]
)
async def read_items(db: db_dependancy):
    items = db.query(models.Credential).all()
    return items

