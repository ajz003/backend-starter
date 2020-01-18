module.exports = function (sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", {
        appointment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            validate: {
                len: [1]
            }
        },
        time: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        kind: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                isIn: [['New Patient', 'Follow-up']]
            }
        }
    });
    return Appointment;
};
