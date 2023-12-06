from sqlalchemy import Column, Integer, String
from database import Base


class Credential(Base):
    __tablename__ = "credentials"
    __allow_unmapped__ = True
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    account_id_source = Column(String)
    account_id_destination = Column(String)
    db_source = Column(String)
    db_destination = Column(String)
    project_id_source = Column(String)
    project_id_destination = Column(String)
