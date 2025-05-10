const users = sequelize.define("user",{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isAlphaNumeric: true,
            len: [3, 15],
        },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true,
        },
        },
    password:{
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            args: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
            msg: Please enter at least one uppercase one lowercase one number and one special character
        },
    },    

    }
})