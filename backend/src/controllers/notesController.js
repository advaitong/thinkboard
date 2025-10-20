export function getAllNotes(req, res) {
    res.status(200).send("you js fetched all notes");
}

export function createNote(req, res) {
    res.status(200).send("note created succesfully");
}

export function updateNote(req, res) {
    res.status(200).send("note updated successfully");
}

export function deleteNote(req, res) {
    res.status(200).send("note deleted successfully");
}