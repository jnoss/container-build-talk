import { createGitgraph, templateExtend, TemplateName} from "@gitgraph/js";

// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

// extend the Metro template
const metroTemplateWithoutAuthor = templateExtend(TemplateName.Metro, {
    commit: {
        message: {
            displayAuthor: false,
        },
    },
    colors: ["#979797","#008fb5","#cca716", "#313184", "#97bf97", "#ca9797"]
});

// Instantiate the graph.
const gitgraph = createGitgraph(graphContainer, {
    template: metroTemplateWithoutAuthor,
});

var master = gitgraph.branch("master");
master.commit("initial commit");
var staging_release = master.branch("staging-release");
var production_release = master.branch("production-release");

var feature_branch = master.branch("feature_branch");
feature_branch.commit("feat: feature");
feature_branch.tag("deploy-dev-feature_branch-1");
feature_branch.commit("fix: feature fix");
feature_branch.tag("deploy-dev-feature_branch-2");
feature_branch.commit("feat: feature continued");
feature_branch.tag("deploy-dev-feature_branch-3");


master.merge({branch: feature_branch, commitOptions: { subject: "Merge pull request #1 from asicsdigital/feature_branch" } });

staging_release.merge({branch: master, commitOptions: { subject: "Merge pull request #2 from asicsdigital/master" } });

production_release.merge({branch: master, commitOptions: { subject: "Merge pull request #3 from asicsdigital/master" } });


var feature_two = master.branch("feature_two");

feature_two.commit("feat: feature two")
feature_two.tag("deploy-dev-feature-two-1")
feature_two.commit("feat: feature two continued")

feature_two.tag("deploy-dev-feature-two-2")

var feature_three = master.branch("feature_three")

feature_three.commit("feat: feature three")
feature_three.tag("deploy-dev-feature-three-1")

feature_two.commit("feat: more two")
feature_two.tag("deploy-dev-feature-two-3")

feature_two.commit("feat: also more two")
feature_two.tag("deploy-dev-feature-two-4")


feature_three.commit("feat: more three")
feature_three.tag("deploy-dev-feature-three-2")

feature_two.commit("feat: feature two addition")
feature_two.tag("deploy-dev-feature-two-4")

master.merge({branch: feature_two, commitOptions: { subject: "Merge pull request #4 from asicsdigital/feature_two" } });

staging_release.merge({branch: master, commitOptions: { subject: "Merge pull request #5 from asicsdigital/master" } });

var feature_two_bugfix = master.branch("feature_two_bugfix")

feature_two_bugfix.commit("fix: bug noticed in staging")

feature_two_bugfix.tag("deploy-dev-feature-two-bugfix-1")

master.merge({ branch: "feature_two_bugfix", commitOptions: { subject: "Merge pull request #6 from asicsdigital/feature_two_bugfix"}})

staging_release.merge({branch: master, commitOptions: { subject: "Merge pull request #7 from asicsdigital/master" } });

production_release.merge({branch: master, commitOptions: { subject: "Merge pull request #8 from asicsdigital/master" } });

feature_three.merge("master")
feature_three.tag("deploy-dev-feature-three-rebase-master")

feature_three.commit("feat: feature_three continued")
master.merge({ branch: "feature_three", commitOptions: { subject: "Merge pull request #9 from asicsdigital/feature_two_bugfix"}})
staging_release.merge({branch: master, commitOptions: { subject: "Merge pull request #10 from asicsdigital/master" } });

production_release.merge({branch: master, commitOptions: { subject: "Merge pull request #11 from asicsdigital/master" } });

