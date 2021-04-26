


FRONTEND_SCHEMA = 
{
    session: {
        isAuthenticated: true,
        user: {email, username, id, etc}
    },
    entities: {
        trackers: [{TrackerTitle, id, etc}, {}, {}],
        trackerEntries: { //append only on tracker:show, (consider cleanup)
            tracker_id: [{EntryDate, id, etc}, {}, {}],
            tracker_id: [{EntryDate, id, etc}, {}, {}]
        }
    },
    errors: {
    },
    modal: {
        
    }
}