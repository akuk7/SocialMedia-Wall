import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useTheme } from "../../contexts/themeContext";
import "./notification.scss";
import notifications from '../../assets/data/notification';
const Notifications: React.FC = () => {
    const { isLightMode, toggleTheme } = useTheme();
    const { device } = useSelector((state: RootState) => state.windowSize);
    

    const formatDate = (date: Date): string => {
        const now = new Date();
        const diffMillis = now.getTime() - date.getTime();
        const diffSeconds = Math.floor(diffMillis / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffWeeks = Math.floor(diffDays / 7);
        const diffYears = Math.floor(diffDays / 365);

        if (diffMinutes < 60) {
            return `${diffMinutes} m`;
        } else if (diffHours < 24) {
            return `${diffHours} h`;
        } else if (diffDays < 7) {
            return `${diffDays} d`;
        } else if (diffWeeks < 52) {
            return `${diffWeeks} w`;
        } else {
            return `${diffYears} y`;
        }
    };

    const sortedNotifications = [...notifications].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    return (
        <div className={`notifications-container ${device} ${isLightMode ? 'light' : ''}`}>
            <h2 className="notification-heading">Notifications</h2>
            <div className="notifications-list">
                {sortedNotifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <div className="notification-text">{notification.text}</div>
                        <div className="notification-timestamp">
                            {formatDate(notification.timestamp)} 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
