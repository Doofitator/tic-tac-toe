var current;
var isBoardDone;

function begin() {
    if (isBoardDone !== false) {
        //hide start button
        document.getElementById('starter').style.visibility = 'hidden';
    
        //clear example board
        document.getElementById('topleft').innerHTML = ' ';
        document.getElementById('midleft').innerHTML = ' ';
        document.getElementById('bottomleft').innerHTML = ' ';
        document.getElementById('topmid').innerHTML = ' ';
        document.getElementById('midmid').innerHTML = ' ';
        document.getElementById('bottommid').innerHTML = ' ';
        document.getElementById('topright').innerHTML = ' ';
        document.getElementById('midright').innerHTML = ' ';
        document.getElementById('bottomright').innerHTML = ' ';
    
        //Ask user who's turn it is
        document.getElementById('info').innerHTML = 'Who starts?<br><br><input type="button" onclick="XStarts()" name="Player" value="X" class="left" id="player"/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="button" onclick="OStarts()" name="Player" class="right" value="O" id="player"/>';
    } else {
        location.reload();
    }
}
    
function GetBG() {
    document.getElementById("bg").style.backgroundImage = "url('http://img12.deviantart.net/9212/i/2013/171/9/2/kryptonian_texture_by_seventhirtytwo-d69x325.jpg')";
    document.getElementById("bg").style.backgroundPosition = "center";
    document.getElementById("bg").style.backgroundSize = "cover";
}

function XStarts() {
    console.log('X');
    current = 'X';
    document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
}
    
function OStarts() {
    console.log('O');
    current = 'O';
    document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
}

function column11() {
    console.log('Top left');
    //cond11 = true
    if (document.getElementById('topleft').innerHTML === ' ') {
        if (current === 'X') {
            document.getElementById('topleft').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'X') {
                if (document.getElementById('topright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midmid').innerHTML === 'X') {
                if (document.getElementById('bottomright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midleft').innerHTML === 'X') {
                if (document.getElementById('bottomleft').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('topleft').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'O') {
                if (document.getElementById('topright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midmid').innerHTML === 'O') {
                if (document.getElementById('bottomright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midleft').innerHTML === 'O') {
                if (document.getElementById('bottomleft').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
            
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column21() {
// O|X|O
// O|O|O
// O|O|O
    console.log('Top mid');
    //Is it blank currently?
    if (document.getElementById('topmid').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('topmid').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('bottommid').innerHTML === 'X') {
                if (document.getElementById('midmid').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('topleft').innerHTML === 'X') {
                if (document.getElementById('topright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
            
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('topmid').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('bottommid').innerHTML === 'O') {
                if (document.getElementById('midmid').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('topleft').innerHTML === 'O') {
                if (document.getElementById('topright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column31() {
// O|O|X
// O|O|O
// O|O|O
    console.log('Top Right');
    //Is it blank currently?
    if (document.getElementById('topright').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('topright').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'X') {
                if (document.getElementById('topleft').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midright').innerHTML === 'X') {
                if (document.getElementById('bottomright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('midmid').innerHTML === 'X') {
                if (document.getElementById('bottomleft').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('topright').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'O') {
                if (document.getElementById('topleft').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midright').innerHTML === 'O') {
                if (document.getElementById('bottomright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('midmid').innerHTML === 'O') {
                if (document.getElementById('bottomleft').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column12() {
// O|O|O
// X|O|O
// O|O|O
    console.log('Mid left');
    //Is it blank currently?
    if (document.getElementById('midleft').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('midleft').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('midmid').innerHTML === 'X') {
                if (document.getElementById('midright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('topleft').innerHTML === 'X') {
                if (document.getElementById('bottomleft').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('midleft').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('midmid').innerHTML === 'O') {
                if (document.getElementById('midright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('topleft').innerHTML === 'O') {
                if (document.getElementById('bottomleft').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column22() {
// O|O|O
// O|X|O
// O|O|O
    console.log('Center');
    //Is it blank currently?
    if (document.getElementById('midmid').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('midmid').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'X') {
                if (document.getElementById('bottommid').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midleft').innerHTML === 'X') {
                if (document.getElementById('midright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('topleft').innerHTML === 'X') {
                if (document.getElementById('bottomright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('topright').innerHTML === 'X') {
                if (document.getElementById('bottomleft').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('midmid').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'O') {
                if (document.getElementById('bottommid').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midleft').innerHTML === 'O') {
                if (document.getElementById('midright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('topleft').innerHTML === 'O') {
                if (document.getElementById('bottomright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('topright').innerHTML === 'O') {
                if (document.getElementById('bottomleft').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column32() {
// O|O|O
// O|O|X
// O|O|O
    console.log('Mid Right');
    //Is it blank currently?
    if (document.getElementById('midright').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('midright').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('topright').innerHTML === 'X') {
                if (document.getElementById('bottomright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midleft').innerHTML === 'X') {
                if (document.getElementById('midmid').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('midright').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('topright').innerHTML === 'O') {
                if (document.getElementById('bottomright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('midleft').innerHTML === 'O') {
                if (document.getElementById('midmid').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column13() {
// O|O|O
// O|O|O
// X|O|O
    console.log('Bottom left');
    //Is it blank currently?
    if (document.getElementById('bottomleft').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('bottomleft').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('bottommid').innerHTML === 'X') {
                if (document.getElementById('bottomright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('midmid').innerHTML === 'X') {
                if (document.getElementById('topright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('topleft').innerHTML === 'X') {
                if (document.getElementById('midleft').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('bottomleft').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('bottommid').innerHTML === 'O') {
                if (document.getElementById('bottomright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('midmid').innerHTML === 'O') {
                if (document.getElementById('topright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('topleft').innerHTML === 'O') {
                if (document.getElementById('midleft').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column23() {
// O|O|O
// O|O|O
// O|X|O
    console.log('Bottom middle');
    //Is it blank currently?
    if (document.getElementById('bottommid').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('bottommid').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'X') {
                if (document.getElementById('midmid').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('bottomleft').innerHTML === 'X') {
                if (document.getElementById('bottomright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('bottommid').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('topmid').innerHTML === 'O') {
                if (document.getElementById('midmid').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('bottomleft').innerHTML === 'O') {
                if (document.getElementById('bottomright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function column33() {
// O|O|O
// O|O|O
// O|O|X
    console.log('Bottom Right');
    //Is it blank currently?
    if (document.getElementById('bottomright').innerHTML === ' ') {
        if (current === 'X') {
            //put an X there!
            document.getElementById('bottomright').innerHTML = 'X';
            current = 'O'
            document.getElementById('info').innerHTML = 'It\'s O\'s turn.';
        
            if (document.getElementById('topright').innerHTML === 'X') {
                if (document.getElementById('midright').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('bottommid').innerHTML === 'X') {
                if (document.getElementById('bottomleft').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('topleft').innerHTML === 'X') {
                if (document.getElementById('midmid').innerHTML === 'X') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'X has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        } 
        if (current === 'O') {
            document.getElementById('bottomright').innerHTML = 'O';
            current = 'X'
            document.getElementById('info').innerHTML = 'It\'s X\'s turn.';
        
            if (document.getElementById('topright').innerHTML === 'O') {
                if (document.getElementById('midright').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            if (document.getElementById('bottommid').innerHTML === 'O') {
                if (document.getElementById('bottomleft').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
            
            if (document.getElementById('topleft').innerHTML === 'O') {
                if (document.getElementById('midmid').innerHTML === 'O') {
                    document.getElementById('starter').style.visibility = 'visible';
                    document.getElementById('starter').innerHTML = 'Restart';
                    isBoardDone = false;
                    document.getElementById('info').innerHTML = 'O has won!';
                    current = 'null';
                    return;
                }
            }
        
            isBoardFull();
            return;
        }
    } else {
        console.log('Oops! Already a char there.')
    }
} //Finished

function isBoardFull() {
    
        if (document.getElementById('topleft').innerHTML !== ' ') {
            if (document.getElementById('midleft').innerHTML !== ' ') {
                if (document.getElementById('bottomleft').innerHTML !== ' ') {
                    if (document.getElementById('topmid').innerHTML !== ' ') {
                        if (document.getElementById('midmid').innerHTML !== ' ') {
                            if (document.getElementById('bottommid').innerHTML !== ' ') {
                                if (document.getElementById('topright').innerHTML !== ' ') {
                                    if (document.getElementById('midright').innerHTML !== ' ') {
                                        if (document.getElementById('bottomright').innerHTML !== ' ') {
                                            document.getElementById('starter').style.visibility = 'visible';
                                            document.getElementById('starter').innerHTML = 'Restart';
                                            isBoardDone = true;
                                            document.getElementById('info').innerHTML = 'It\'s a draw!';
                                            current = 'null';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}