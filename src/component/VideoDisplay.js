import React, { useRef, useState } from 'react';
import "./css/VideoDisplay.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NearMeIcon from '@mui/icons-material/NearMe';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import { Avatar } from '@mui/material';

const VideoDisplay = ({ src, channel, title, likes, dislike, comment, shares }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [like, setLike] = useState(likes);

    const videoRef = useRef(null);

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying((play) => !play);
        }
    }

    const handleSubscribe = () => {
        setIsSubscribe((subscribe) => !subscribe);
    }

    const handleLiked = () => {
        if (isLiked) {
            setIsLiked((likes) => !likes);
            setLike((like) => like - 1);
        } else {
            setIsLiked((likes) => !likes);
            setLike((like) => like + 1);
        }
    }

    const handleEnded = () => {
        setIsPlaying(false);
    }

    return (
        <div className='video'>

            <video
                onClick={handleVideoClick}
                className='video__player'
                ref={videoRef}
                src={src}
                onEnded={handleEnded}
            ></video>

            <div className="shortsContainer">
                <div className="shortsVideoTop">
                    <div className="shortsVideoTopIcon">
                        <ArrowBackIcon />
                    </div>
                    <div className="shortsVideoTopIcon">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className='shortsVideoMiddle' onClick={handleVideoClick}>
                    {isPlaying ?
                        (<div className='shortsVideoMiddleIcon'>
                            <PauseCircleIcon />
                        </div>)
                        : (<div className='shortsVideoMiddleIcon'>
                            <PlayCircleIcon />
                        </div>)
                    }
                </div>
                <div className="shortsVideoSideIcons">
                    <div className="shortsVideoSideIcon">
                        <div onClick={handleLiked}>
                            <ThumbUpIcon style={{ color: isLiked ? "red" : "white" }} />
                        </div>
                        <p>{like}</p>
                    </div>
                    <div className="shortsVideoSideIcon">
                        <ThumbDownIcon />
                        <p>{dislike}</p>
                    </div>
                    <div className="shortsVideoSideIcon">
                        <InsertCommentIcon />
                        <p>{comment}</p>
                    </div>
                    <div className="shortsVideoSideIcon">
                        <NearMeIcon />
                        <p>{shares}</p>
                    </div>
                </div>
                <div className="shortsBottom">
                    <div className="shortsDesc">
                        <p className='description'>
                            {title}
                        </p>
                    </div>
                    <div className="shortDetails">
                        <Avatar />
                        <p>{channel}</p>
                        <button style={{ background: isSubscribe ? "red" : "hsla(0, 0%, 69.4%, .609)" }} onClick={handleSubscribe}>
                            {isSubscribe ? "SUBSCRIBED" : "SUBSCRIBE"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDisplay;
