export const lib = () => {
    //Get files
    return app.gulp.src(app.path.src.libraries)
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.libs))
}