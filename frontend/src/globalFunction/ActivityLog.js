// LogActivity.js
import axios from 'axios';

const logActivity = async (userId, activity) => {
    try {
        const response = await axios.post('http://localhost:8081/activityLog/addActivity', {
            user_id: userId,
            activity: activity
        });
        console.log(response);
    } catch (error) {
        console.error('Error logging activity:', error);
    }
};

export default logActivity;
