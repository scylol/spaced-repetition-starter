import React from 'react';

export default function UserInput(){
        return (
           <form>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" required/>
                <input type="submit" id="enterButton" className="enterButton" name="submit" value="Enter"/>
            </form>
        );
    }
