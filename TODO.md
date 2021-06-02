todo:


css-reset

Backend:
Activities - CRUD
ActEntries - CRUD


Frontend:
Native - MW

{ MongoError: E11000 duplicate key error collection: dev.users index: username_1 dup key: { username: "asdf" }
    at Function.create (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/core/error.js:57:12)
    at toError (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/utils.js:123:22)
    at coll.s.topology.insert (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/operations/common_functions.js:258:39)
    at handler (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/core/sdam/topology.js:944:24)
    at fn (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/cmap/connection_pool.js:350:13)
    at handleOperationResult (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/core/sdam/server.js:558:5)
    at MessageStream.messageHandler (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/cmap/connection.js:277:5)
    at MessageStream.emit (events.js:182:13)
    at processIncomingData (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/cmap/message_stream.js:144:12)
    at MessageStream._write (/home/cpbram/repos/moodtrackr/backend/node_modules/mongodb/lib/cmap/message_stream.js:42:5)
    at doWrite (_stream_writable.js:410:12)
    at writeOrBuffer (_stream_writable.js:394:5)
    at MessageStream.Writable.write (_stream_writable.js:294:11)
    at TLSSocket.ondata (_stream_readable.js:666:20)
    at TLSSocket.emit (events.js:182:13)
    at addChunk (_stream_readable.js:283:12)
  driver: true,
  name: 'MongoError',
  index: 0,
  code: 11000,
  keyPattern: { username: 1 },
  keyValue: { username: 'asdf' } }
