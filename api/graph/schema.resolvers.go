package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.40

import (
	"context"
	"fmt"

	"github.com/lulzshadowwalker/von/graph/model"
	"github.com/lulzshadowwalker/von/infrastructure"
	"github.com/lulzshadowwalker/von/repos"
)

// SendNotification is the resolver for the sendNotification field.
func (r *mutationResolver) SendNotification(ctx context.Context, input *model.SendNotificationInput) (*model.Notification, error) {
	panic(fmt.Errorf("not implemented: SendNotification - sendNotification"))
}

// Notifications is the resolver for the notifications field.
func (r *queryResolver) Notifications(ctx context.Context) ([]*model.Notification, error) {
	ripo := repos.NewNotificationsRepo(infrastructure.Database)
	res, err := ripo.Index()
	if err != nil {
		return nil, err
	}

	return res, nil
	return []*model.Notification{}, nil
	panic(fmt.Errorf("not implemented: Notifications - notifications"))
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
