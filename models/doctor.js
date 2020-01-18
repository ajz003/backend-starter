module.exports = function(sequelize, DataTypes) {
    var Doctor = sequelize.define("Doctor", {
        doctor_id: {
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
      }
    });
    return Doctor;
  };  