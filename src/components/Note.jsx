const Note=({note,toggleimportance})=>{
  const lable=note.important? 'make not important':'make important'
  return(
    <>
    <li>
      
      {note.content}
      <button onClick={toggleimportance}>{lable}</button>
      </li>
    
    </>
  )
}
export default Note;