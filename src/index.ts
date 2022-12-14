import app from './app';
import getAllCharacters from './endpoints/getAllCharacters';
import putCreateCharacter from './endpoints/putCreateCharacter';
import deleteCharacter from './endpoints/deleteCharacter';

app.get("/characters", getAllCharacters)

app.put("/characters", putCreateCharacter)

app.delete("/characters/:id", deleteCharacter)
