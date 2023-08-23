from typing import Optional, List, Union

from mysql.connector.errors import ProgrammingError

from database import Ulagich
from .CRUDRepository import CRUDRepository


class UserRepository(CRUDRepository, Ulagich):
    def all(self) -> List[Union[dict, tuple]]:
        self.ulash()
        query = "SELECT * FROM users;"
        self.mb.execute(query)
        entities = self.mb.fetchall()
        self.uzish()
        return entities

    def create(self, form: dict) -> Union[dict, tuple]:
        self.ulash()
        query = "INSERT INTO users(`name`, `surname`, `username`, `password`, `phone`) " \
                "VALUES (%s, %s, %s, %s, %s);"
        self.mb.execute(query, tuple(form.values()))
        self.ulanish.commit()

        # query = f"SELECT * FROM users WHERE `id` = {self.mb.lastrowid}"
        # self.mb.execute(query)
        entity = form.copy()
        entity['id'] = self.mb.lastrowid
        self.uzish()
        return entity

    def get(self, nd: int) -> Optional[Union[dict, tuple]]:
        self.ulash()
        query = "SELECT * FROM users where id = %s;"
        self.mb.execute(query, (nd,))
        entity: dict = self.mb.fetchone()
        self.uzish()

        try:
            entity.pop("password")
        except AttributeError:
            pass
        return entity

    def update(self, nd: int, form: dict) -> Union[dict, tuple]:
        try:
            self.ulash()
            query = "UPDATE users SET " \
                    "name = %s, surname = %s, patronymic = %s, username = %s, email = %s, phone = %s " \
                    "WHERE id = {};".format(nd)
            self.mb.execute(query, tuple(form.values()))
            self.ulanish.commit()
            self.uzish()
            entity = {'id': nd}
            entity.update(form)
            return entity
        except ProgrammingError as e:
            raise e

    def delete(self, nd) -> Optional[Union[dict, tuple]]:
        self.ulash()
        query = "DELETE FROM users where id = {};".format(nd)
        self.mb.execute(query)
        self.ulanish.commit()
        self.uzish()
        return None


class TrafficRepository(CRUDRepository, Ulagich):
    def get_by_company(self, company, term=30) -> List[Union[dict, tuple]]:
        self.ulash()
        query = "SELECT * FROM internet WHERE company = %s;"
        self.mb.execute(query, (company,))
        natija = self.mb.fetchall()
        self.uzish()
        return natija


class CredentialRepository(Ulagich):
    def kirish(self, nom, parol):
        try:
            self.ulash()
            sorov = f"SELECT * FROM adminstrators WHERE login = '{nom}' AND password = '{parol}'"
            self.mb.execute(sorov)
            natija = self.mb.fetchone()
            self.uzish()
            return natija
        except ProgrammingError:
            return None

    def kiritish(self, sorov="INSERT INTO narsalar(nom) VALUES(%s);", values=(None,)):
        self.ulash()
        self.mb.execute(sorov, values)
        self.ulanish.commit()
        self.uzish()
