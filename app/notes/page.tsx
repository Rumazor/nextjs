
import Note from './Note'
import styles from './Notes.module.css';
import CreateNote from './CreateNote';

async function getNotes(){
    const resp = await fetch('http://127.0.0.1:8090/api/collections/notes/records',{
        cache:'no-store'
    })
    const data = await resp.json()
    return data?.items as any[]
}

export default async function NotesPage() {

    const notes = await getNotes()


    return <div >
        <h1>Notes</h1>
        <div className={styles.grid} > {notes?.map((note) =>{
            return <Note key={note.id} note={note} />
        })}</div>

        <CreateNote/>
    </div>
    
}

