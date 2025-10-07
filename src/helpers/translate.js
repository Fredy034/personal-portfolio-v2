// Helper function to translate fields in an array of objects based on the current language
// This function abstracts the translation logic for different data types

function translateFields(data, language, fields) {
  return data.map((item) => {
    const translated = { ...item };
    fields.forEach((field) => {
      if (item[field] && typeof item[field] === 'object') {
        translated[field] = item[field][language];
      }
    });
    return translated;
  });
}

export const translateContacts = (data, language) => translateFields(data, language, ['title', 'linkText']);

export const translateProjects = (data, language) => translateFields(data, language, ['title', 'made', 'description']);

export const translateEducation = (data, language) => translateFields(data, language, ['title', 'date', 'description']);

export const translateExperience = (data, language) => translateFields(data, language, ['title', 'date', 'modality', 'description', 'skills']);

export const translateSkills = (data, language) => translateFields(data, language, ['description']);

export const translateCourses = (data, language) => translateFields(data, language, ['title', 'date']);

export const translateService = (data, language) => translateFields(data, language, ['alt', 'title', 'text']);

export const translateTestimonials = (data, language) => translateFields(data, language, ['text']);
