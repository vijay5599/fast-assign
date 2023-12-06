from pydantic import BaseModel


class Credentials(BaseModel):
    # id: int
    user_id: int
    account_id_source: str
    account_id_destination: str
    db_source: str
    db_destination: str
    project_id_source: str
    project_id_destination: str

    class config:
        # id: int
        orm_mode = True
