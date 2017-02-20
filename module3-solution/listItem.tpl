<ul>
  <li ng-repeat="item in list.found">
    {{item.name}}, {{item.short_name}}, {{item.description}}
    <button class="btn btn-default" ng-click="list.onRemove({index: $index})">Don't want this one!</button>
  </li>
<ul>
  <div class="error" ng-if="!list.found.length">Nothing Found</div>
