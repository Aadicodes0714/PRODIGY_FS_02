const router = require('express').Router();
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const employeeController = require('../controllers/employeeController');

const validateEmployee = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').isLength({ min: 10 }).withMessage('Phone must be at least 10 characters'),
  body('position').notEmpty().withMessage('Position is required'),
  body('department').notEmpty().withMessage('Department is required'),
  body('salary').isNumeric().withMessage('Salary must be a number')
];

router.use(auth);

router.post('/', validateEmployee, employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:id', employeeController.getEmployee);
router.put('/:id', validateEmployee, employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
