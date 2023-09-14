//example id format: this-is-id (lowercase with hypen (-) separator)
export const changeIntoIdFormat = (id?: string) => {
	return id === undefined ? '' : id.split(' ').join('-').toLowerCase();
};

//before: menu.dashboard.feature
//after: menu-dashboard-feature
export const changeDotSeparatorIntoIdFormat = (id?: string) => {
	return id === undefined ? '' : id.split('.').join('-').toLowerCase();
};
