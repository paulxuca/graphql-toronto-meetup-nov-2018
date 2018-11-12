export const whatIsPrisma = {
  graphQLQuery: `
{
    post(where: {
        id:"1"
    }) {
        id
        name
    }
}
    `.trim(),
  sqlQuery: `
    SELECT id, name FROM posts WHERE id=1`.trim()
};

export const declarativeDataSchemaMigrations = {
  dataModelPrisma: `
type Post {
    id: ID! @unique
    name: String!
}

    `.trim(),
  migrationsSql: `
CREATE TABLE posts (
    id integer NOT NULL,
    name: character varying not null
);

ALTER TABLE posts
ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
    `.trim()
};

export const declarativeDataSchemaMigrationsAndLater = {
  dataModelPrisma: `
type Post {
    ...
    description: String # <-- Our new field!
}

    `.trim(),
  migrationsSql: `
ALTER TABLE posts
ADD COLUMN description varying;
    `.trim()
};

export const prismaCodegen = {
  graphqlQuery: `
{
    user(where: {
        id: "1"
    }) {
        posts {
            id
            name
        }
    }
}
    `.trim(),
  prismaClientCode: `
prisma.user({ id: '1' }).posts()
    `.trim()
};
