export function generateFirstName() {
    const firstNames = ['John', 'Emily', 'Michael', 'Ava', 'William', 'Sophia', 'James', 'Olivia', 'Robert', 'Isabella'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    return randomFirstName;
};

export function generateSecondName() {
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return randomLastName;
};

export function generatePassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
};

export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    const randomEmail = randomString + '@example.com';
    return randomEmail;
}