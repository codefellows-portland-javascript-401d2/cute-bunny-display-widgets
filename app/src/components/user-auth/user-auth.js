export default {
  template: `
  <div>
    <label>
      <input type="radio" ng-model="$ctrl.action" value="signin">
      Sign In
    </label>
    <label>
      <input type="radio" ng-model="$ctrl.action" value="signup">
      Sign Up
    </label>
  </div>
  <signin ng-show="$ctrl.action === 'signin'" success="$ctrl.success()"></signin>
  <signup ng-show="$ctrl.action === 'signup'" success="$ctrl.success()"></signup>
  `,
  bindings: {
    success: '&'
  },
  controller: controller
};

function controller(){
  this.action = 'signin';
}
