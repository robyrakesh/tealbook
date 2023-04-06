import { faker } from '@faker-js/faker';

export const userDetails = {
    email: faker.internet.email('rem', 'tr', 'gib.com'),
    firstName: 'Rakesh',
    seniority: 'Adult',
    city: 'Windsor',
    country: 'Canada',
    lastName: 'test',
    position: 'TT',
    phone: 5193456677,
    company: 'RET'
}