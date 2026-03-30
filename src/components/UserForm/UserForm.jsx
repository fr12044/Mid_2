import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './UserForm.css';

function UserForm() {
    const { addUser } = useContext(UserContext)

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const validate = () => {
        const newErrors = {}

        if (!form.firstName) {
            newErrors.firstName = 'First name is required'
        }

        if (!form.lastName) {
            newErrors.lastName = 'Last name is required'
        }

        if (!form.email.includes('@')) {
            newErrors.email = 'Email must contain @'
        }

        if (form.age === '') {
            newErrors.age = 'Age is required'
        } else if (form.age <= 0) {
            newErrors.age = 'Age must be greater than 0'
        }

        return newErrors
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newErrors = validate()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const newUser = {
            firstName: form.firstName,
            lastName: form.lastName,
            age: form.age,
            email: form.email,
        }

        addUser(newUser)

        setForm({
            firstName: '',
            lastName: '',
            age: '',
            email: ''
        })

        setErrors({})
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <div className="user-form__group">
                <input className="user-form__input" type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
                {errors.firstName && <p className="user-form__error">{errors.firstName}</p>}
            </div>

            <div className="user-form__group">
                <input className="user-form__input" type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
                {errors.lastName && <p className="user-form__error">{errors.lastName}</p>}
            </div>

            <div className="user-form__group">
                <input className="user-form__input" type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} />
                {errors.age && <p className="user-form__error">{errors.age}</p>}
            </div>

            <div className="user-form__group">
                <input className="user-form__input" type="text" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                {errors.email && <p className="user-form__error">{errors.email}</p>}
            </div>

            <button className="user-form__button" type="submit">Add user</button>
        </form>
    )
}

export default UserForm;