import React from 'react';

export default function UserInput(){
        return (
           <form>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" required/>
                <input type="submit" id="enterAnswerButton" className="button" name="submit" value="usersAnswer"/>
            </form>
        );
    }
