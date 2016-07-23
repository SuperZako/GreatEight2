//*************************************************************
//*															  *
//*                 HTML 5 Sound Manager					  *
//*															  *
//*************************************************************
//Copyright 2013 of OVAL Technologies
//Author: Grant Hayman

//These functions handle the audio for the game

namespace SoundManager {

    // The audio relies on files preloaded with the preloader functions

    //Result of the audio element support test
    var testAudio = true;
    // String holding the supported type of audio either wav or mp3
    var audioType: string;
    // maximum number of simultaneous tracks which can be played
    var maxSimult = 25;
    // an array of all the available tracks
    var tracks: { track: HTMLAudioElement, endtime: number }[] = null;
    // if the sound is muted or not
    var mute = "sound";
    // duration multiplier to put duration in seconds
    var playfor = 1000;

    //Audio Element ID's
    var audioIDs = ["theme", "title", "sword", "cutPlant", "pickup", "throw", "broken", "killed", "deadLink", "hurtLink", "heart", "fanfare", "fallLink", "secret", "item", "lowhealth", "stairs", "select", "rupee"];
    //The actual audio objects array
    // function checks for audio support and what format is supported
    function checkAudio() {
        //try the wav support audio test 
        //try {
        //    testAudio = new Audio().canPlayType('audio/wav');
        //} catch (error) {
        //    // if there was an error test failed
        //    testAudio = false;
        //}
        ////	If we have the audio element, test was successful
        //if (!!testAudio) {
        //    audioType = "wav";
        //    testAudio = true;
        //}
        //// else wav support failed so try the mp3 support
        //else {
        //    try {
        //        testAudio = document.createElement('Audio');
        //        // CanPlayType returns maybe, probably, or an empty string.
        //        var msg = testAudio.canPlayType('audio/mpeg');
        //        if (msg != "") {
        //            // gave back probably or maybe so try to play mp3
        //            testAudio = true;
        //        }
        //        // gave back inability to play it
        //        else testAudio = false;
        //    } catch (error) {
        //        // some other failure occured witht the mp3 test
        //        testAudio = false;
        //    }
        //    // the mp3 succeeded 
        //    if (!!testAudio) {
        //        audioType = "mp3"
        //        testAudio = true;
        //    }
        //}
        //return testAudio;
    };
    //this function completely resets the sound manager, clearing any audio tracks
    export function resetSoundmanager() {
        //recheck audio support
        checkAudio();
        if (!testAudio) return;
        //clear sound manager memory allocation
        tracks = [];
        //tracks = new Array();
        //reallocate memory for all the tracks and set the endtime to over
        for (var i = 0; i < maxSimult; i++) {
            let track = new Audio();
            let endtime = -1;
            tracks.push({ track, endtime });
        }
    };

    // Plays any sounds sent to the funtion by audio element id
    export function makeSound(id: string) {
        //if no sound manager get out
        if (!testAudio)
            return;
        //if cannot get a duration off the audio element of id get out
        let audioElement = <HTMLAudioElement>document.getElementById(id);
        if (!document.getElementById(id) || !audioElement.duration)
            return;
        //if sound manager is muted get out
        if (mute == "muted")
            return;
        //counts the attempts to play
        var attemptsToPlay = 0;
        // loop through the tracks
        for (let track of tracks) {
            var theTime = new Date();				// get the time
            // the sound requested to play is already playing so get out
            if (track.endtime > theTime.getTime() && track.track.src == audioElement.src) {
                //write(id+" was called already");
                return;
            }
            //count this request to play a sound
            attemptsToPlay++;
            // if a track is free for playing a sound
            if (track.endtime < theTime.getTime()) {
                // set the endtime for the new sound
                track.endtime = theTime.getTime() + audioElement.duration * playfor;
                // set the source for the new sound
                track.track.src = audioElement.src;
                // load it and play it
                //tracks[i]['track'].load();
                track.track.play();
                // able to play the sound so quit the loop and finish
                break;
            }
        }
        //reached max number of allowed tracks so cannot play the sound - could try again here
        if (attemptsToPlay >= maxSimult)
            return;
    };
    //stops playing all the sounds
    function stopSounds() {
        // if no sound manager get out
        if (!testAudio) return;
        // get the time
        var theTime = new Date();
        //if tracks exist
        if (tracks != null) {
            // loop through the tracks
            for (let track of tracks) {
                try {
                    // set its endtime to over
                    track.endtime = -1;
                    // try to pause it
                    track.track.pause();
                    // remove any looping set to the track
                    track.track.removeEventListener('ended', <any>arguments.callee, false);
                    //clear the track from memory
                    track.track = null;
                    track.track = new Audio();
                }
                catch (error) {
                    //audio error thrown
                    //write("Sound Manager Error: "+error);
                }
            }
        }
        //if we have audio IDs listed pause them too
        if (audioIDs != null) {
            // loop through the tracks
            for (var i = 0; i < audioIDs.length; i++) {
                var id = audioIDs[i];
                if (document.getElementById(id)) {
                    let audioObj = <HTMLAudioElement>document.getElementById(id);
                    try {
                        audioObj.pause();
                    }
                    catch (error) {
                        //audio error thrown
                        //write("Sound Manager Error: "+error);
                    }
                }
            }
        }
        return;
    };
    //stops playing a single sound
    function stopSound(id: string) {
        //if no sound manager get out
        if (!testAudio)
            return;

        let audioElement = <HTMLAudioElement>document.getElementById(id);
        //if the id called to stop doesn't exist get out
        if (!document.getElementById(id))
            return;
        //get the time
        var theTime = new Date();
        //loop through the tracks
        for (let track of tracks) {
            //if we find one with the same id as the one passed in
            if (track.endtime > theTime.getTime() && track.track.src == audioElement.src) {
                try {
                    //set its endtime to over
                    track.endtime = -1;
                    // try to pause it
                    track.track.pause();
                    //remove any looping set to this track
                    track.track.removeEventListener('ended', <any>arguments.callee, false);
                    //clear this track from memory
                    track.track = null;
                    track.track = new Audio();
                    //no break removes any duplicate tracks with same source
                    //break;
                }
                catch (error) {
                    //audio error thrown
                    //write("Sound Manager Error: "+error);
                }
            }
        }
        // loop through the tracks
        for (let id of audioIDs) {
            if (document.getElementById(id)) {
                let audioObj = document.getElementById(id);
                audioObj.removeEventListener('ended', <any>arguments.callee, false);
            }
        }
    };
    // Plays the sound and then calls it again when it ends, so it will loop, possibly a bit noisy when it switches
    function loopSound(id: string) {
        // if no sound manager get out
        if (!testAudio)
            return;

        let audioElement = <HTMLAudioElement>document.getElementById(id);
        // if the id sent is not an audion element get out
        if (!audioElement.duration)
            return;

        // if the sound manager is muted get out
        if (mute == "muted")
            return;

        // get the time
        var theTime = new Date();
        // loop through each track
        for (let track of tracks) {
            // if this sound is already playing get out
            if (track.endtime > theTime.getTime() && track.track.src == audioElement.src) {
                //write(id+" is already looping!");
                return;
            }
            // if a track is free for playing a sound
            if (track.endtime < theTime.getTime()) {
                try {
                    // set the endtime for the new sound
                    track.endtime = theTime.getTime() + audioElement.duration * playfor;
                    // set the source for the new sound
                    track.track.src = audioElement.src;
                    var testSrc = track.track.src;
                    // load and play the sound
                    track.track.load();
                    track.track.play();
                    // set an event handler to play the sound when it throws its ended event
                    let listener = () => {
                        track.track.removeEventListener('ended', listener, false);
                        loopSound(id);
                    };
                    track.track.addEventListener('ended', listener, false);

                    break;
                }
                catch (error) {
                    //audio error thrown
                    //write("Sound Manager Error: "+error);
                }
            }
        }
    };
    //mutes all the sounds
    function muteSounds(id: string) {
        var showMute = document.getElementById(id);

        if (!testAudio) {
            showMute.title = "No Audio Support";
            return;
        }

        if (mute == "muted") {
            mute = "sound";
            showMute.style.backgroundImage = "url('Images/sound.png')";
            //restart the background music
            playBackgroundMusic();
            // make a button noise
            //makeSound("click");
        }
        else if (mute == "sound") {
            stopSounds();
            mute = "noBack";
            showMute.style.backgroundImage = "url('Images/noBack.png')";
            // make a button noise
            //makeSound("click");
        }
        else {
            stopSounds();
            mute = "muted";
            showMute.style.backgroundImage = "url('Images/mute.png')";
            resetSoundmanager();
        }
    };
    // function plays background music depending on game states
    function playBackgroundMusic() {
        if (mute != "sound")
            return;

        //if (Global.state == "startscreen") {
        //    stopSound("theme");
        //    stopSound("select");
        //    makeSound("title");
        //}
        //else if (!Global.gameover) {
        //    stopSound("title");
        //    stopSound("select");
        //    loopSound("theme");
        //}
        //else if (!!Global.gameover) {
        //    stopSound("title");
        //    stopSound("theme");
        //    loopSound("select");
        //}
    };
    // current tracks playing something
    function currTracks() {
        var count = 0;
        // get the time
        var theTime = new Date();
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].endtime > theTime.getTime()) {
                count++;
            }
            //write(count + " tracks playing");
        }
    }
}