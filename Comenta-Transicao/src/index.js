exports.onIssueTransitioned = async (event, context) => {
    const { localResourceId: issueId } = event.activityItem.object;
    const comment = {body: "Comentario da transição issue!!!"};
    await apiasApp().requestJira(`/rest/api/2/issue/${issueId}/comment`, {
        method: "POST",
        body: JSON.stringify(comment)
    });
};
