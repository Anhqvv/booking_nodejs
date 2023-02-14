'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@gmail.com',
          password: '123456',
          firstName: 'Nguyen',
          lastName: 'Rin',
          address: 'HCM',
          gender: 1,
          roleId: 'ADMIN',
          phonenumber: '1122222211',
          positionId: '1',
          image: '',

          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
