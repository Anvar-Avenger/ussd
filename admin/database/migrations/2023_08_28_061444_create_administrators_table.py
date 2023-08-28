from orator.migrations import Migration


class CreateAdministratorsTable(Migration):

    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create('administrators') as table:
            table.increments('id')
            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop('administrators')
