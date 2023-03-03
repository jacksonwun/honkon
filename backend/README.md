##### After changing translation field

Before proceeding, replace the following line in the newly created migration file:
bases=(parler.models.TranslatedFieldsModelMixin, models.Model),

With the following one:
bases = (parler.models.TranslatableModel, models.Model)