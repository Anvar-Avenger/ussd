from typing import Optional, List, Union

from mysql.connector.errors import ProgrammingError
from orator.exceptions.query import QueryException

from database import Ulagich
from .CRUDRepository import CRUDRepository
from ..models import User


class UserRepository(CRUDRepository):
    def all(self) -> List[Union[dict, tuple]]:
        entities = User.all()
        return entities.serialize()

    def create(self, form: dict) -> Union[dict, tuple]:
        try:
            entity = User.create(**form)
            return entity.serialize()
        except QueryException:
            return {}

    def get(self, idx: int) -> Optional[Union[dict, tuple]]:
        entity = User.find(idx)
        return entity.serialize()

    def update(self, idx: int, form: dict) -> Union[dict, tuple]:
        entity = User.find(idx)
        # entity.name = form.get('name')
        # entity.surname = form.get('surname')
        entity.update(**form)
        return entity.serialize()

    def delete(self, idx) -> Optional[Union[dict, tuple]]:
        User.find(idx).delete()
        return None


class CredentialRepository(Ulagich):
    def kirish(self, nom, parol):
        try:  # administrator
            self.ulash()
            sorov = f"SELECT * FROM adminstrators WHERE login = '{nom}' AND password = '{parol}'"
            self.mb.execute(sorov)
            natija = self.mb.fetchone()
            self.uzish()
            return natija
        except ProgrammingError:
            return None

    def kiritish(self, sorov="INSERT INTO narsalar(nom) VALUES(%s);", qiymatlar=(None,)):
        self.ulash()
        self.mb.execute(sorov, qiymatlar)
        self.ulanish.commit()
        self.uzish()
