import React from 'react';
import './experience-card.css';

export interface ExperienceCardProps {
    title: string;
    tags: string[];
    image: string;
    alt: string;
    description: string;
}


export const ExperienceCard: React.FC<ExperienceCardProps> = ({title, tags, image, alt, description}: ExperienceCardProps) => {
    return (
        <div className="experience-card">
            <img className="image" src={image} alt={alt}/>
            <div className="details">
                <div className="title">{title}</div>
                <div className="tags"> 
                    { tags.map((str, index) => (
                        <div key={index} className="tag"> {str} </div>
                    ))} 
                </div> 
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

// export default ExperienceCard;