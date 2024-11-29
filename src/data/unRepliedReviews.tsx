import { Review } from "@/types/dashboardtypes";


export const reviews: Review[] = [
    {
        id: 'review-1',
        fullname: 'Maoshe Found',
        avatar: 'https://github.com/shadcn.png',
        rating: '5.0',
        reviewmesg: 'This app has made it so much easier to manage my customer interactions! I highly recommend it to anyone in the service industry. The user interface is intuitive, and the features are incredibly helpful in tracking customer inquiries and responses. It has truly transformed the way I handle my business communications.',
        mood: 'Happy'
    }, 
    {
        id: 'review-2',
        fullname: 'Laoshe Lost',
        avatar: 'https://github.com/shadcn.png',
        rating: '1.0',
        reviewmesg: 'Terrible experience! The food was cold and the wait time was unacceptable. I will not return to this establishment. I expected a lot more based on the reviews I read, but my visit was disappointing. The staff seemed disorganized, and it felt like they didn’t care about the customers at all. I left feeling frustrated and unsatisfied.',
        mood: 'Angry'
    }, 
    {
        id: 'review-3',
        fullname: 'Soman Away',
        avatar: 'https://github.com/shadcn.png',
        rating: '4.8',
        reviewmesg: 'Fantastic service! This application has improved my efficiency and I couldn’t be happier with the results. It allows me to easily track my customer interactions and provides insights that help me serve my clients better. I appreciate the ongoing updates and support from the team, which makes using the app a pleasure.',
        mood: 'Happy'
    },
    {
        id: 'review-4',
        fullname: 'David Fore',
        avatar: 'https://github.com/shadcn.png',
        rating: '2.0',
        reviewmesg: 'Very disappointing. The cleanliness was lacking and the staff was not attentive to our needs at all. I had high hopes for this place, but it fell short in almost every aspect. The tables were dirty, and it took a long time for anyone to come and take our order. I expected much better service and atmosphere.',
        mood: 'Angry'
    },
    {
        id: 'review-5',
        fullname: 'Maoshe Found',
        avatar: 'https://github.com/shadcn.png',
        rating: '1.5',
        reviewmesg: 'I was really looking forward to my meal, but the service was slow and the food did not meet my expectations. The wait staff seemed overwhelmed, and it took far too long to get our orders. When the food finally arrived, it was lukewarm and lacked flavor. I left feeling disappointed and unlikely to return.',
        mood: 'Angry'
    },
    {
        id: 'review-6',
        fullname: 'Rohan Bright',
        avatar: 'https://github.com/shadcn.png',
        rating: '1.8',
        reviewmesg: 'The overall experience was lackluster. I expected better quality and service based on the reviews. The ambiance was nice, but that was overshadowed by the poor service. Our server was inattentive, and the food was mediocre at best. I was hoping for a memorable dining experience, but it turned out to be quite forgettable.',
        mood: 'Angry'
    },
    {
        id: 'review-7',
        fullname: 'Sita Dawn',
        avatar: 'https://github.com/shadcn.png',
        rating: '1.9',
        reviewmesg: 'I was disappointed with my visit. The food was mediocre and the atmosphere was not welcoming. The decor was outdated, and it felt like the staff was indifferent to our presence. I had heard good things about this place, but my experience did not live up to the hype. I was hoping for a cozy and inviting environment, but it felt quite the opposite.',
        mood: 'Angry'
    },
];

export const aiResponses = [
    {
        reviewId: 'review-1',
        aiResponse: 'Thank you for sharing your wonderful experience, Maoshe! We’re thrilled to hear that our app has made a significant impact on your customer interactions. Your recommendation means the world to us, and we’re grateful for your continued support!'
    },
    {
        reviewId: 'review-2',
        aiResponse: 'Sorry to hear that your experience was disappointing, Laoshe. We take your feedback seriously and will work to address the issues you’ve raised. We appreciate your honesty and hope to have the opportunity to serve you better in the future.'
    },
    {
        reviewId: 'review-3',
        aiResponse: 'We’re overjoyed to hear that our app has improved your efficiency, Soman! We’re committed to providing you with the best possible experience and appreciate your kind words about our team’s support. Thank you for being an valued customer!'
    },
    {
        reviewId: 'review-4',
        aiResponse: 'Sorry to hear that our establishment fell short of your expectations, David. We take cleanliness and attentive service very seriously and will work to improve in these areas. Thank you for sharing your concerns, and we hope to have the chance to serve you better in the future.'
    },
    {
        reviewId: 'review-5',
        aiResponse: 'Sorry to hear that your meal did not meet your expectations, Maoshe. We understand how frustrating it can be to wait for food and then be disappointed with the quality. We’ll work to improve our service speed and food quality to ensure a better experience for you in the future.'
    },
    {
        reviewId: 'review-6',
        aiResponse: 'Thank you for sharing your feedback, Rohan. We apologize that our service did not meet your expectations, and we’ll work to improve our staff’s attentiveness and food quality. We appreciate your honesty and hope to have the opportunity to serve you better in the future.'
    },
    {
        reviewId: 'review-7',
        aiResponse: 'Sorry to hear that our atmosphere and food did not meet your expectations, Sita. We understand how important it is to feel welcome and enjoy a good meal. We’ll work to improve our decor and food quality to ensure a better experience for you in the future.'
    },
];