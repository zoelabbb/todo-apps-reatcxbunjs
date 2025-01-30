interface AlertProps {
    message: string;
    type?: 'success' | 'danger' | 'warning' | 'info'; // Tipe alert
}

const Alert: React.FC<AlertProps> = ({ message, type = 'danger' }) => {
    if (!message) return null;

    return <div className={`alert alert-${type} animate__animated animate__fadeInUp`} role="alert">
        {message}
    </div>;
};

export default Alert;
