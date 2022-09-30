import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        email: 'admin@eventsnow.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    }
]

export default users