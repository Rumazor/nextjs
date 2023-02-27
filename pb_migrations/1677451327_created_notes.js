migrate((db) => {
  const collection = new Collection({
    "id": "6xiubvu8zqsipkx",
    "created": "2023-02-26 22:42:07.201Z",
    "updated": "2023-02-26 22:42:07.201Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sudtvyy6",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6xiubvu8zqsipkx");

  return dao.deleteCollection(collection);
})
