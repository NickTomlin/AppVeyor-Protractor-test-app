describe('index', function () {
    it('should repeat array', function () {
        browser.get('index.html');

        var repos = element.all(by.repeater("d in data"));

        repos.count()
            .then(function(c) {
                expect(c).toBe(2);
            });
    });
});
