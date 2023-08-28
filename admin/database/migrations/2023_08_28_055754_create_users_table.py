from orator.migrations import Migration


class CreateUsersTable(Migration):

    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create('users') as table:
            table.increments('id')
            table.string('name')
            table.string('surname').nullable()
            table.string('patronymic').nullable()
            table.string('username').unique()
            table.string('password').nullable()
            table.string('email').unique().nullable()
            table.string('phone').unique()
            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop('users')
