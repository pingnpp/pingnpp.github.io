
export const useUtils = () => {

    /**
     * @param {String} string
     * @return {String}
     */
    const capitalize = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return {
        capitalize,
    }
}