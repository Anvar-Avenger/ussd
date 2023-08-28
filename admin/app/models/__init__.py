from orator import Model


class User(Model):
    """
    Think big...
    """
    __fillable__ = ['name', 'surname', 'username', 'phone']

