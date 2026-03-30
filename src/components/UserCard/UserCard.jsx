import './UserCard.css';

function UserCard({ user }) {
    return (
        <div className="user-card">
            <p className="user-card__text">First name: {user.firstName}</p>
            <p className="user-card__text">Last name: {user.lastName}</p>
            <p className="user-card__text">Age: {user.age}</p>
            <p className="user-card__text">Email: {user.email}</p>
        </div>
    )
}

export default UserCard