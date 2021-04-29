import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CourseFrom from './CourseForm';

afterEach(cleanup);

function renderCourseForm(args) {
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };
    const props = { ...defaultProps, ...args};
    return render(<CourseFrom {...props} />);
}

it('should render Add Course header', () => {
    const { getByText } = renderCourseForm();
    getByText('Add Course');
});

it('should label save button as [Save] when not saving', () => {
    const { getByText } = renderCourseForm();
    getByText('Save');
})

it('should label save button as [Saving...] when not saving', () => {
    const { getByText, debug } = renderCourseForm({ saving: true });
    // This will give you back the formated component in the console
    // debug();
    getByText('Saving...');
})