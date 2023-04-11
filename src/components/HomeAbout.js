import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HomeAbout.css'

const HomeAbout = () => {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
    };

    return (
        <div className="home-about">
            <div className="home-about-text">
                <motion.h2
                    className="home-about-heading"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                >
                    PASS THE CAKE SHOP
                </motion.h2>
                <motion.p
                    className="home-about-description"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Welcome to Pass The Cake Shop! My name is Jordan Chaz P Cabanada, and I'm the founder and head cheesecake maker.

                    Pass The Cake Shop started as a holiday tradition for my family in 2017. As kids, my sisters, cousins, and I would take charge of cooking and baking for Thanksgiving and Christmas, and I started experimenting with cheesecake recipes. With each year, my cheesecakes got tastier and more innovative, and my family encouraged me to start a business.

                    So, I started selling my cheesecakes to local customers, and Pass The Cake Shop was born. Through trial and error, I refined my recipes and gained a loyal following through word of mouth and social media. Today, Pass The Cake Shop offers a variety of cheesecake flavors and sizes, all made with the highest quality ingredients.

                    While we currently only offer local pickup and drop-off, my dream is to one day open a physical shop and expand our menu to include even more innovative items and flavors. I also plan to offer online ordering and shipping so that anyone, anywhere can experience the joy of Pass The Cake Shop's delicious cheesecakes.

                    Thank you for visiting our website, and I hope you'll try our cheesecakes soon!
                </motion.p>
            </div>
            <div className="home-about-image-container">
                <motion.img
                    className="home-about-image"
                    src="https://dummyimage.com/400x400/000/fff"
                    alt="Cheesecake"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />
            </div>
        </div>
    );
};

export default HomeAbout;
