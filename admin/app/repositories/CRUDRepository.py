from typing import Optional, Union, List


class CRUDRepository:
    def all(self) -> List[Union[dict, tuple]]:
        ...

    def create(self, form: dict) -> Union[dict, tuple]:
        ...

    def get(self, nd: int) -> Optional[Union[dict, tuple]]:
        ...

    def update(self, nd: int, form: dict) -> Union[dict, tuple]:
        ...

    def delete(self, nd: int) -> Optional[Union[dict, tuple]]:
        ...
