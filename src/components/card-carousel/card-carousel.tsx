import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './card-carousel.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


import {ExperienceCardProps, ExperienceCard} from '../experience-card/experience-card';

interface CardCarouselProps {
    cards: ExperienceCardProps[]; // MAYBE FIX THIS
    itemsPerSlide?: number;
}

function groupIntoChunks<T>(array: T[], chunkSize: number): T[][] {
    const output: T[][] = [];
    let currentChunk: T[] = [];
  
    array.forEach((item, index) => {
        currentChunk.push(item);
  
        if ((index + 1) % chunkSize === 0 || index === array.length - 1) {
            output.push(currentChunk);
            currentChunk = [];
        }
    });
  
    return output;
}

const CardCarousel: React.FC<CardCarouselProps> = ({cards, itemsPerSlide = 3}) => {

    // const groupedCards = [];
    // for (let i = 0; i < cards.length; i += itemsPerSlide) {
    //     groupedCards.push(cards.slice(i, i + itemsPerSlide));
    // }

    return (
            <Carousel
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                autoPlay={false}
                duration={750}
                className="card-carousel"
                fullHeightHover={false}
                swipe={false}
                PrevIcon={<ArrowLeftIcon/>}
                NextIcon={<ArrowRightIcon/>}
                navButtonsProps={{ className: 'nav-button' }}
                navButtonsWrapperProps={{ className: 'nav-button-wrapper' }}
                activeIndicatorIconButtonProps={{ className: 'active-indicator-icon-button' }}
                indicatorIconButtonProps={{ className: 'indicator-icon-button' }}
                indicatorContainerProps={{ className: 'indicator-container' }}


                cycleNavigation={false}
                // navButtonsWrapperProps={{ style: {
                //     bottom: '0',
                //     top: 'unset'
                // }}}
            >
                {groupIntoChunks(cards, itemsPerSlide).map((group, groupIndex) => (
                    <Grid className="carousel-slide" container key={groupIndex} sx={{ gap: '20px', justifyContent: 'center', alignItems: 'center', py: '20px', height: '300px' }}>
                        {group.map((card_prop, index) => (
                                <ExperienceCard 
                                    key={index} 
                                    title={card_prop.title} 
                                    tags={card_prop.tags} 
                                    image={card_prop.image} 
                                    alt={card_prop.alt} 
                                    description={card_prop.description}
                                />
                        ))}
                    </Grid>
                ))}
                {/* {
                    groupedCards.map((group, groupIndex) => (
                        <div key={groupIndex} className="carousel-slide">
                            {group.map((card_prop, index) => (
                                <ExperienceCard 
                                    key={index} 
                                    title={card_prop.title} 
                                    tags={card_prop.tags} 
                                    image={card_prop.image} 
                                    alt={card_prop.alt} 
                                    description={card_prop.description}
                                />
                            ))}
                        </div>
                    ))
                } */}

            </Carousel>
        

    );
}

{/* <div className="card-carousel">
            <Carousel
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                autoPlay={false}
                duration={750}
            >
                {
                    groupedCards.map((group, groupIndex) => (
                        <div key={groupIndex} className="carousel-slide">
                            {group.map((card_prop, index) => (
                                <ExperienceCard 
                                    key={index} 
                                    title={card_prop.title} 
                                    tags={card_prop.tags} 
                                    image={card_prop.image} 
                                    alt={card_prop.alt} 
                                    description={card_prop.description}
                                />
                            ))}
                        </div>
                    ))
                }

            </Carousel>

        </div> */}



// cards.map((card_prop, index) => (
                    //     <ExperienceCard 
                    //         key={index} 
                    //         title={card_prop.title} 
                    //         tags={card_prop.tags} 
                    //         image={card_prop.image} 
                    //         alt={card_prop.alt} 
                    //         description={card_prop.description}
                    //     />
                    // ))

export default CardCarousel;