export function requiredFileType(type: string, file: File) {

    if (file) {
        const extension = file.name.split('.')[1].toLowerCase();
        if (type.toLowerCase() !== extension.toLowerCase()) {
            return {
                requiredFileType: true
            };
        }

        return null;
    }

    return null;

}