import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import useDebounce from '../hooks/useDebounce';
import UserCard from '../components/UserCard/UserCard';
import UserForm from '../components/UserForm/UserForm';
import './UsersPage.css';

function UsersPage() {
    const { users, loading, error } = useContext(UserContext)
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)

    const filteredUsers = users.filter((user) => {
        if (debouncedSearch === '') {
            return true
        }

        return user.firstName.includes(debouncedSearch)
    })

    return (
        <div className="users-page">
            <div className="users-page__container">
                <h1 className="users-page__title">Users List</h1>

                <UserForm />

                <div className="users-page__search">
                    <input className="users-page__input" type="text" placeholder="Search by first name" value={search} onChange={(event) => setSearch(event.target.value)} />
                </div>

                {loading && <p className="users-page__message">Loading...</p>}
                {error && <p className="users-page__message">Error</p>}
                {!loading && !error && users.length === 0 && <p className="users-page__message">No users</p>}

                {!loading && !error && users.length > 0 && filteredUsers.length === 0 && (
                    <p className="users-page__message">No users found</p>
                )}

                {!loading && !error && filteredUsers.length > 0 && (
                    <div className="users-page__list">
                        {filteredUsers.map((user, index) => (
                            <UserCard key={user.id || index} user={user} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UsersPage