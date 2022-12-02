import app from './app';
import getAllCharacters from './endpoints/getAllCharacters';
import putCreateCharacter from './endpoints/putCreateCharacter';



app.get("/characters", getAllCharacters)

app.put("/characters", putCreateCharacter)
